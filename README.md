Domain Object Storage System
======

This is a system to storage persistent objects across different domains. It provide real-time events notifications (stored, received, viewed). It is based on real-time socket system [SocketCluster](https://github.com/SocketCluster/socketcluster) and Express.
It used normal DNS system to resolve domains and https-tls to provide authentication among domains.
However it defines a standard REST API about communication among domains, anyone can build its own Storage System and attach it to the existent network.

You can find the license in LICENSE.md file.

Note:
I'm building this project and it's not ready yet, please don't use it.
