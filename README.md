# Demo Streams

## Create Big Files

With the [`mkfile`](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/mkfile.8.html) Mac command we can create automatically big files


```
    mkfile -n 1m src/temp_1MB_file
    mkfile -n 10m src/temp_10MB_file
    mkfile -n 100m src/temp_100MB_file
    mkfile -n 500m src/temp_500MB_file
    mkfile -n 1g src/temp_1GB_file
```

## Use demo

```
    node no-stream-way src/temp_1MB_file dest/temp_1MB_file 
    node no-stream-way src/temp_10MB_file dest/temp_10MB_file
    node no-stream-way src/temp_100MB_file dest/temp_100MB_file
    node no-stream-way src/temp_500MB_file dest/temp_500MB_file
```

```
    node stream-way src/temp_1MB_file dest/temp_1MB_file 
    node stream-way src/temp_10MB_file dest/temp_10MB_file
    node stream-way src/temp_100MB_file dest/temp_100MB_file
    node stream-way src/temp_500MB_file dest/temp_500MB_file
```

## Resources

- https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
- https://www.valentinog.com/blog/memory-usage-node-js/

- https://hacks.mozilla.org/2012/11/tracking-down-memory-leaks-in-node-js-a-node-js-holiday-season/
- https://blog.yld.io/2015/08/10/debugging-memory-leaks-in-node-js-a-walkthrough/#.We9o5JNl9E4