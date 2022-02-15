
			
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

const literal = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonValue: z.ZodSchema<Prisma.JsonValue> = z.lazy(() =>
	z.union([literal, z.array(jsonValue), z.record(jsonValue)])
);
const jsonSchema: z.ZodSchema<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([z.undefined(), literal, z.array(jsonValue), z.record(jsonValue)])
);


			export type Include = Prisma.HasInclude;
			export type Fields = Prisma.EducationSelect;
			export type Distinct = Prisma.Enumerable<Prisma.EducationScalarFieldEnum>;
			export type Query = Prisma.EducationWhereInput;
			export type QueryUnique = Prisma.EducationWhereUniqueInput;
			export type QueryOptions = {
				orderBy?: Prisma.EducationOrderByWithAggregationInput;
				limit?: number;
				offset?: number;
				include?: Include;
				fields?: Fields;
				distinct?: Distinct;
			};

			export type Education = z.infer<typeof schema>
			export const schema = z.object({ id: z.string().min(25).optional(),institution: z.string(),specialization: z.string(),label: z.string().optional(),profileId: z.string(),created_at: z.union([z.string(), z.date()]).optional() });
			export const empty = { institution: '',specialization: '',label: '',profileId: '',created_at: new Date() };
			 
			export function toDraft() {
				const data = { ...empty } as Education;
				const selected = schema.pick({ institution: true,specialization: true,label: true,profileId: true,created_at: true })

				return { data, schema: selected };
			}

			
		