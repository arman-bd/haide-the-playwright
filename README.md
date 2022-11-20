# heide the playwright

<img src="heide.png" width="100%" />

This project demonstrates how to use [Playwright](https://playwright.dev/) to automate the browser. It uses **proxies** to bypass various anti-bot measures. It can also be used to scrape data from websites. It is written in [TypeScript](https://www.typescriptlang.org/), [Express](https://expressjs.com/) and uses [Node.js](https://nodejs.org/en/) as the runtime.

The project uses [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to run the application. It is also possible to run the application without Docker.

## Requirements

The project requires the following to be installed:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

After installing the requirements, clone the repository and install the dependencies:

```bash
git clone https://github.com/arman-bd/haide-the-playwright.git
cd capsy-the-puppeteer
npm install
```

### Configuration

The project requires a list of proxies to be available inside .proxies file. If the proxies are not available, the application will work without proxies. If the proxy requires authentication, the username and password should be provided. Otherwise, the username and password should be omitted.

Fomat of the proxy file:

```text
username:password@http://ip:port
socks5://ip:port
```

### Running

You can run the project in development mode by running the following command:

```bash
npm run dev
```

This will start the server on port 8800. You can access the API at `http://localhost:8900`.

### Running using Docker Compose

You can also run the project using Docker. To do so, run the following command:

```bash
docker-compose up --build -d
```

The command will build the Docker image and start the container in detached mode. 
You can access the API at `http://localhost:8900`.

### API

The application currently has the following API(s):

- `GET /`: Returns a simple message to indicate that the API is working.
- `GET /ping`: Returns a ping response with Timestamp.
- `GET /task/screenshot?url={url}`: Returns a screenshot of the given URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is for educational purposes only. It is not intended to be used for any production purposes. The author is not responsible for any misuse or damage caused by this project. Use it at your own risk.

## References

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Playwright](https://playwright.dev/)