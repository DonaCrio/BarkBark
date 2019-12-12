import * as fs from 'fs';
import { AbstractParser } from './AbstractParser';
import { ParserOptions } from './types';
import { NotInputFileError } from '../exceptions/NoInputFileError';
import { Queue } from '../Queue';
import { Log } from '../types';

export class FileParser extends AbstractParser {
  constructor(queue: Queue<Log>, options: ParserOptions) {
    if (!options.filepath) {
      throw new NotInputFileError('The path was not specified');
    }
    const fileStream = fs.createReadStream(options.filepath);
    super(fileStream, queue);
  }
}
