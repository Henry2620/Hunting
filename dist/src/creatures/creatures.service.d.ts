import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CreaturesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCreatureDto: CreateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findExtinct(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
