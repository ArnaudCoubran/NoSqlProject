use(users);

[
    {
      "user": "admin",
      "pwd": "12345678",
      "roles": [ { "role": "root", "db": "admin" } ]
    },
    {
      "user": "franck",
      "pwd": "franckpass",
      "roles": [ { "role": "readWrite", "db": "mydatabase" } ]
    },
    {
      "user": "lionel",
      "pwd": "lionelpass",
      "roles": [ { "role": "read", "db": "mydatabase" } ]
    }
  ]
  