<?php

namespace Tests\Unit;
// namespace Tests\Feature;

// use PHPUnit\Framework\TestCase;

// use Illuminate\Foundation\Testing\RefreshDatabase;
// use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;


class FileTest extends TestCase
{
    /**
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get('/api/files');
        $response->assertStatus(200);
        $response->assertJson([]);
    }

    public function testStorage()
    {
        Storage::fake('local');
        $file = UploadedFile::fake()->image('test-image.jpg');
        $response = $this->json('POST', '/api/files', [
            'fileKey' => $file,
        ]);

        $response->assertStatus(200);
        Storage::disk('local')->assertExists('/public/' . $file->hashName());
    }
}
