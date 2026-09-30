<?php

function validateTurnstile($token, $secret)
{
    if (!is_string($token) || $token === '' || strlen($token) > 2048) {
        return false;
    }

    $request = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    if ($request === false) {
        return false;
    }

    curl_setopt_array($request, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => $secret,
            'response' => $token,
        ]),
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
    ]);

    $response = curl_exec($request);
    $status = curl_getinfo($request, CURLINFO_HTTP_CODE);
    curl_close($request);

    if ($response === false || $status !== 200) {
        return false;
    }

    $result = json_decode($response, true);
    return is_array($result)
        && ($result['success'] ?? false) === true
        && ($result['action'] ?? '') === 'contact'
        && in_array($result['hostname'] ?? '', ['aikidolevice.sk', 'www.aikidolevice.sk'], true);
}
