@extends('layouts.app')

@section('content')
    @include('sections.header')
    <main>
        @include('sections.hero')
        @include('sections.product-grid', ['products' => $products, 'categories' => $categories])
        @include('sections.contact-form')
    </main>
    @include('sections.footer')
    @include('partials.toast')
@endsection
