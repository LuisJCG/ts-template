import { Logger } from "tslog"

const logger: Logger = new Logger();

export function main() {
    logger.info("Entry point!");
}

main();
