# Setup free SSL with NodeJS and express

## Steps
1. Open sslforfree.com
2. After entering domain select manual verification 
3. With Filezilla update .acme-challenge with correct file. 
4. Set DNS A record for server
5. Run server with ```node server.js```
6. The express server will serve 
7. Verify on sslforfree.com
8. Download SSL certs



Once downloaded rename crt and key to pem file
