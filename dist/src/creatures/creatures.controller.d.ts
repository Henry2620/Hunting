import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
export declare class CreaturesController {
    private readonly creaturesService;
    constructor(creaturesService: CreaturesService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CreatureClient<{
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
