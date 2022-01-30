
def get_value(dictionary, compositekey):
    
    keys = compositekey.split('/')
    value = dictionary.get(keys[0])
  
    if len(keys[1:]) == 0:
        return value
    elif isinstance(value, dict):
        return(get_value(value, '/'.join(str(item) for item in keys[1:] ) ) )

Dict = {'a': {'b' : { 'c': {'d' : 100 } } } }
key1 = 'a/b/c'
key2 = 'a/b/c/d'
key3 = 'a/b'
key4 = ''
key5 = 'a/b/'
key6 = 'a//b/c/d'

print("key: '%s' -> '%s'" %(key1, get_value(Dict, key1)))
print("key: '%s' -> '%s'" %(key2, get_value(Dict, key2)))
print("key: '%s' -> '%s'" %(key3, get_value(Dict, key3)))
print("key: '%s' -> '%s'" %(key4, get_value(Dict, key4))) # testing with an empty key
print("key: '%s' -> '%s'" %(key5, get_value(Dict, key5))) # testing with a trailing /
print("key: '%s' -> '%s'" %(key6, get_value(Dict, key6))) # testing wiht an invalid key

print("key: '%s' -> '%s'" %(key3, get_value({}, key3))) #passing an empty map