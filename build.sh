#!/bin/sh

include=(
    background_scripts
    content_scripts
    icons
    library
    manifest.json
    popups
)

rm build/library_detector.zip
mkdir build/library_detector

for path in ${include[@]}
do
    cp -R $path build/library_detector
done

cd build
zip -r library_detector.zip library_detector
rm -R library_detector
