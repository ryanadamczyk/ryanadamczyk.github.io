#!/bin/bash

# Directory containing the PNG files
dir="/home/radamczyk/Repos/ryanadamczyk.github.io/assets/img/posts"

# Use the find command to search for both .png and .PNG files, and process each file with cwebp
find "$dir" -type f \( -iname "*.png" \) | while read -r file; do
    # Convert the current PNG file to WebP format
    cwebp -q 80 "$file" -o "${file%.png}.webp" || cwebp -q 80 "$file" -o "${file%.PNG}.webp"
    # If cwebp command succeeds, delete the original PNG file
    if [ $? -eq 0 ]; then
        rm "$file"
    fi
done
