
			
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
			export type Fields = Prisma.GallerySelect;
			export type Distinct = Prisma.Enumerable<Prisma.GalleryScalarFieldEnum>;
			export type Query = Prisma.GalleryWhereInput;
			export type QueryUnique = Prisma.GalleryWhereUniqueInput;
			export type QueryOptions = {
				orderBy?: Prisma.GalleryOrderByWithAggregationInput;
				limit?: number;
				offset?: number;
				include?: Include;
				fields?: Fields;
				distinct?: Distinct;
			};

			export type Gallery = z.infer<typeof schema>
			export const schema = z.object({ id: z.string().min(25).optional(),images: z.array(z.string()),profileId: z.string(),created_at: z.union([z.string(), z.date()]).optional() });
			export const empty = { images: [],profileId: '',created_at: new Date() };
			 
			export function toDraft() {
				const data = { ...empty } as Gallery;
				const selected = schema.pick({ images: true,profileId: true,created_at: true })

				return { data, schema: selected };
			}

			
		