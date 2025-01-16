import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  log(message: string) {
    // Customize log formatting or integrate with external tools
    super.log(`[ProcessIQ] ${message}`);
  }

  error(message: string, trace?: string) {
    super.error(`[ProcessIQ] ${message}`, trace);
  }

  warn(message: string) {
    super.warn(`[ProcessIQ] ${message}`);
  }

  debug(message: string) {
    super.debug(`[ProcessIQ] ${message}`);
  }

  verbose(message: string) {
    super.verbose(`[ProcessIQ] ${message}`);
  }
}
