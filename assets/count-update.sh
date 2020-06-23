#!/bin/sh

x=`cat assets/count`
y=`tree api/doi | grep json | wc -l | sed 's/^[ \t]*//'`

cat app/views/main.js | sed "s/$x/$y/" > app/views/main2.js
mv app/views/main2.js app/views/main.js
echo $y > assets/count