import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from './tdo/create-report.dto';

@Injectable()
export class ReportsService {

    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.report.findMany({
            include: {
                location: true,
            },
        });
    }

    create(data: CreateReportDto) {
        return this.prisma.report.create({
            data,
        });
    }

    update(id: number, data: CreateReportDto) {
        return this.prisma.report.update({
            where: { id },
            data,
            include: {
                location: true,
            },
        });
    }

    remove(id: number) {
        return this.prisma.report.delete({
            where: { id },
        });
    }
}
