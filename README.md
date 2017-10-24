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
    node index src/temp_1MB_file dest/temp_1MB_file 
    node index src/temp_10MB_file dest/temp_10MB_file
    node index src/temp_100MB_file dest/temp_100MB_file
    node index src/temp_500MB_file dest/temp_500MB_file
```


## Stream Memory Checking

https://www.npmjs.com/package/memory-usage