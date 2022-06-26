<?php

namespace Database\Seeders\Voyager;

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Menu;

class MenusTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run(): void
    {
        Menu::firstOrCreate([
            'name' => 'admin',
        ]);
    }
}