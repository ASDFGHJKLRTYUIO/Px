function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "animebytes.tv") || dnsDomainIs(host, ".animebytes.tv")) {
        return "SOCKS 127.0.0.1:24000";
    }
    return "DIRECT";
}