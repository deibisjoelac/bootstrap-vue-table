<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/api/users', function () {

    $search = request('search');
    $query = App\User::searching($search);
    if ( request('per_page') == -1 ) {
        $perPage  =  $query->count();
   }else{
        $perPage  = request('per_page');
   }
    $ordercolumn = request('sortBy');
    $order = request('order');
   
    return  $query
        ->orderBy($ordercolumn ?? 'id', $order ?? 'ASC')
        ->paginate($perPage);
});
