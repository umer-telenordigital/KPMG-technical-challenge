import paramiko

def key_based_connect(server):
    special_account = "ec2-user"
    pkey = paramiko.RSAKey.from_private_key_file("../Downloads/temp2.pem")
    client = paramiko.SSHClient()
    policy = paramiko.AutoAddPolicy()
    client.set_missing_host_key_policy(policy)
    client.connect(server, username=special_account, pkey=pkey)
    return client

def query_metadata(client, key):
    command = "TOKEN=curl -X PUT 'http://169.254.169.254/latest/api/token' -H 'X-aws-ec2-metadata-token-ttl-seconds: 21600' && curl -H 'X-aws-ec2-metadata-token: $TOKEN' -v http:/169.254/latest/meta-data/" 
    _stdin, stdout, _stderr = client.exec_command(command+key)
    lines = stdout.read().decode()
    errLines = _stderr.read().decode()
    print(errLines)
    print(lines)

client = key_based_connect("ec2-3-8-87-49.eu-west-2.compute.amazonaws.com")
key1 = "instance-id"
key2 = "ami-id"
query_metadata(client, key1)
query_metadata(client, key2)
client.close()
