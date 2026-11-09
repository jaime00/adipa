<?php

if (!function_exists('formatPrice')) {
    function formatPrice(int $cents): string
    {
        $euros = $cents / 100;
        return number_format($euros, 2, ',', '.') . ' €';
    }
}
