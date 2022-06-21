TCP / IP 

Transmission Control Protocol / Internet Protocol

A four layer model to breakdown how data is transferred from one computer to another on the internet

Layer 1: Link/Physical
- responsible for turning bit streams 1 or 0 into something that can be physically transferred through wire
- how to transport data from node to node
Layer 2: Internet
- responsible for getting data to a destination
- protocol used to identify every computer in a network and is also used to determine what route data should go to reach it's destination
- IPv4 address is a four byte number used to uniquely identify a computer
- Totally it has around 4.3 billion unique addresses. But this is not enough for the entire world now
- IPv6
- IPv6 is the newer IPv4
- An IPv6 address is made up of 128 bits. IPv6 addresses are four 16-bit address. So every number can go up to ~65,000. It uses hexadecimal which is a base 16 number 0 - 9 A 10B - 11 F - 15 ....
- IPv6 has 3.4 * 10 ^ 38 addresses

traceroute

DNS - Domain Name Service

Because we don't want to memorize IP addresses, we use a DNS to create a "nickname" for the domain address.

DNS services have a dictionary that knows which domain name belongs to what ip address eg. codecore.ca => has the address of => 205.144.171.150

you can use the command "host <domain_name>" to find out the IP address of a domain name

Layer 3: Transport

-Responsible for turning a larger resource into small pieces called packets
- Responsible for reconstructing the packets back into the larger resource at the destination

TCP - Transmission Control Protocol

- A resource is split up into multiple packets
- A packet has 3 parts
  -Header: holds information used to error check & info on how to assemble the packets back into the original resource
  -Body / Payload: The actual data that needs to be transported
  -Footer: Information to end the packet
-Reliable
-Packets are ordered
-Packets are error checked
-Connection based

Ports
- Ports can be thought of as doors that you computer can open and close when it needs to send information or receive information from the internet
- Every application that is running requires a port e.g. psql => 5432

UDP - User Datagram Protocol
-Unreliable
-No order checking
- connectionless
- faster than TCP

Servers and Clients
- A client is a computer that is requesting / sending a resource
- A server is a computer that responds to incoming requests

Layer: 4
- This is the layer that we work with the most as web developers
- This is where application like(browsers: Chrome, Firefox, Safari...) work in
- It's responsible for fetching resources. It will turn images into an encoded format

HTTP - HyperText Transfer Protocol
- used to sent text between clients and servers
- has built in verbs to describe requests(GET, POST, PATCH, DELETE...)
- has built in response codes for extra information(200->ok, 404->not found, 500-> internal server error)
- uses a combination of verbs url's and paths to get resources from servers

TCP / IP as whole. Sending a image to Facebook

1. User uploads an image on the application layer (layer 4)
2. The application turns this image into encoded text format and sends it using HTTP (layer 3)
3. TCP will break up the encoded text into multiple packets
4. Defines rules on how to re-build the packets at the destination (layer 2)
5. IPv4 will route packets from the origin to the destination (layer 1)
6 Changing the encoded text into a physical form that can be transported through a wire

