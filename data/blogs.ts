export const blogs = [
    {
        slug: "portfolio-over-terminal",
        title: "How I Serve My Portfolio Over The Terminal",
        date: "2025-01-30",
        author: "Manan Gandhi",
        content: `
A few months ago, I came across \`$ ssh terminal.shop\`, the best way to order coffee - via the terminal. Using the SSH protocol to order coffee was a very unconventional method, but it got me thinking. How could I try to replicate this and put my portfolio over the terminal?

I started digging into how the SSH protocol works. It involved private keys, public keys, and key exchange in order to establish a connection over the internet. But I just wanted to create a simple method for serving my portfolio. I thought about finding a simpler protocol to implement. After a bit of research, I found out about <i>netcat</i> and how it can be used to establish simple TCP connections over the internet.

After a bit more research, I wrote a simple program to echo text over a TCP socket. This is how to implement it in Python:

\`\`\`python
import socket

HOST = 'localhost'
PORT = 1810

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    conn, addr = s.accept()
    with conn:
        print('Connected by', addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)
\`\`\`

<br>

I ran it over my local machine and connected to it using netcat:
\`\`\`bash
$ nc localhost 1810
Hello, World!
Hello, World!
\`\`\`

<br>

Using this, I understood that netcat sends any data typed in the terminal to the server, and the server can respond back with any data. Using this knowledge, I modified the program to include my name as a banner whenever a connection is established, and then started defining commands that users can type to get more information about me. I included the \`>\` prompt to make it feel more interactive.

<br>

I then decided to add a chatbot to allow the users to ask questions about me in natural language. I defined the \`CHAT\` command, that passes any of the text after it to an AI model, Gemini 2.5 Flash Lite in my case, and returns a streaming response back to the user. This way, users can ask any questions about me and get a response back in real-time. The model has all context about me and the projects I have worked on, so it can answer any questions related to that.

<br>

Finally, I decided to host it on an existing VPS I had on Microsoft Azure. I created a simple Dockerfile to containerize it, and then used GitHub Actions to automatically build and deploy it to my VPS whenever I push changes to the main branch. 

<br>

Once deployed, I went onto my CloudFlare dashboard and created a new DNS record, \`sh.manan.cloud\`, that points to my VPS's IP address. Now, anyone can connect to my portfolio over the terminal using netcat:
\`\`\`bash
$ nc sh.manan.cloud 1810
\`\`\`
Go ahead, give it a shot!

<br>

This entire project was a fun way to learn about TCP sockets, netcat, and just to experiment with unconventional ways of serving a portfolio. If you have any questions about it, feel free to reach out to me on [hello@manan.cloud](mailto:hello@manan.cloud)!

The entire source code for this project is available on GitHub: [https://github.com/MananGandhi1810/terminal-portfolio](https://github.com/MananGandhi1810/terminal-portfolio)

<br>

PS: The port 1810 was chosen because it represents my birthday, 18th October.
`,
    },
];

export function getBlogBySlug(slug: string) {
    return blogs.find((blog) => blog.slug === slug);
}

export function getBlogMetadata() {
    return blogs.map(({ content, ...metadata }) => metadata);
}
