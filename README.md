# GoReact File Manager

PHP version: 7.3.20

Laravel version: 7.21.0

Angular version: 7.0.4

Angular is located in a `public\ui` folder. Uploaded files are located in a `public\storage` folder.

### Steps to project deployment:
1) You should have installed PHP interpreter v.7.3 and MySQL database engine. If you have no that packages you can install [XAMPP package](https://www.apachefriends.org/download.html)
2) You need installed [Composer](https://getcomposer.org/download/) and Laravel. To do that make `composer global require laravel/installer`
3) Create a new database with a name `goreact` and collation `utf8mb4_unicode_ci`. You can use your own MySQL client or use [phpMyAdmin](http://localhost/phpmyadmin/) if you start Apache and MySQL services via XAMPP task panel
4) To create required tables run `php artisan migrate` from the project's root folder
5) To create a symbolic link for uploaded files make `php artisan storage:link`
6) To launch the backend server make `php artisan serve`
7) You need to install Angular `npm install -g @angular/cli`
8) To start web UI go to `/public/ui` and make: `ng serve --open`. The main page will be accessible here `http://localhost:4200/`
9) To run tests make `php artisan test`

### Demo:
You can see the project video presentation in a file demo.mp4
