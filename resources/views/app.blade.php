<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravello</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}"/>
    <script src="{{ mix('js/app.js') }}" type="text/javascript" defer></script>
</head>
<body>
<div id="app" class="h-screen">
    <router-view></router-view>
</div>
</body>
</html>
