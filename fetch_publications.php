<?php
// filepath: c:\Users\skall\OneDrive - Chalmers\Documents\kristianssonlabofwonders\fetch_publications.php

// Fetch the Google Scholar page
$url = 'https://scholar.google.se/citations?user=WauDzPUAAAAJ&hl=en&oi=ao';
$html = file_get_contents($url);

// Use a library like simple_html_dom to parse the HTML
include('simple_html_dom.php');
$dom = str_get_html($html);

// Extract publication data
$publications = [];
foreach ($dom->find('.gsc_a_tr') as $row) {
    $title = $row->find('.gsc_a_at', 0)->plaintext;
    $link = 'https://scholar.google.se' . $row->find('.gsc_a_at', 0)->href;
    $authors = $row->find('.gsc_a_at', 0)->next_sibling()->plaintext;
    $publications[] = [
        'title' => $title,
        'link' => $link,
        'authors' => $authors
    ];
}

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($publications);
?>