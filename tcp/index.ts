const listener = Deno.listen({ port: 3000 });

console.log('Listening on 0.0.0.0:3000');

// Tested with Telnet
for await (const conn of listener) {
    console.log(conn)
    Deno.copy(conn, conn);
}