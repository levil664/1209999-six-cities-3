import { Command } from './command.interface';


export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
    Программа для подготовки данных для REST API сервера.
    Пример:
        cli.js --<command> [--arguments]
    Команды:
        --help:                      # печатает текст подсказку
        --version:                   # выводит номер версии
        --import <path>:             # импортирует данные из TSV
`);
  }
}
