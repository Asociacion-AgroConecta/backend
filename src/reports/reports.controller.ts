import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './tdo/create-report.dto';

@Controller('reports')
export class ReportsController {

  constructor(private readonly reportsService: ReportsService) { }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Post()
  create(@Body() body: CreateReportDto) {
    return this.reportsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateReportDto) {
    return this.reportsService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportsService.remove(Number(id));
  }
}
