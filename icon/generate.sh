#!/bin/bash
for size in 128 256 512
do
    inkscape -f icon.svg -w $size -h $size -e "icon-${size}x${size}.png"
done