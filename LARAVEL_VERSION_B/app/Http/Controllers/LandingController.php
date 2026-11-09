<?php

namespace App\Http\Controllers;

class LandingController extends Controller
{
    public function index()
    {
        $products = config('products.items');
        $categories = config('products.categories');

        return view('landing', compact('products', 'categories'));
    }
}
