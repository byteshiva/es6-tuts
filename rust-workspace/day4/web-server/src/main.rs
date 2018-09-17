extern crate tokio;

use tokio::io;
use tokio::net::TcpListener;
use tokio::prelude::*;

fn main() {
    println!("Hello, world!");
    let addr ="127.0.0.1:6142".parse().unwrap();
    let listener = TcpListener::bind(&addr).unwrap();
    let server = listener.incoming().for_each(|socket| {
        println!("accepted socket; addr={:?}", socket.peer_addr().unwrap());

        let connection = io::write_all(socket, "hello world\n")
            .then(|res| {
                println!("wrote message; success={:?}", res.is_ok());
                Ok(())
            });
            // Spawn a new task that processes the socket:
            tokio::spawn(connection);
            Ok(())
    })
    .map_err(|err| {
        println!("accept error = {:?}", err);
    });

    println!("server running on localhost:6142");
    tokio::run(server);
}
