Written in Python:
Pre-requisistes: Python 2 0r 3 

To test this you would need to have an instance up and running in AWS 
Have a private key to access this instsance 

Make these changes to get_metadata.py file:
- line: 20, specify the DNS name of your aws instance here
- line: 4, specify a username that can ssh into this host
- line: 5, specify path to the private key file that can access this host

after this simply run: python get_metadata.py

if you want to query for additional keys, add the calls to query_metadata method as follows:

query_metadata(client, <meta_data_key>)



