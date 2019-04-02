#!/bin/sh

for f in *.gif
do
	short=${f:0:4}
	if ls $short".png" &> /dev/null; then
		echo "file exists"
	else
		montage -tile x1 -geometry +0+0 -background none $short*.gif $short.png
		convert $short.png -transparent white $short.png
	fi
done