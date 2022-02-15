
			
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
			export type Fields = Prisma.EventSelect;
			export type Distinct = Prisma.Enumerable<Prisma.EventScalarFieldEnum>;
			export type Query = Prisma.EventWhereInput;
			export type QueryUnique = Prisma.EventWhereUniqueInput;
			export type QueryOptions = {
				orderBy?: Prisma.EventOrderByWithAggregationInput;
				limit?: number;
				offset?: number;
				include?: Include;
				fields?: Fields;
				distinct?: Distinct;
			};

			export type Event = z.infer<typeof schema>
			export const schema = z.object({ id: z.string().min(25).optional(),title: z.string(),description: z.string(),place: z.string(),duration: z.string(),price: z.number(),currency: z.string(),profileId: z.string(),created_at: z.union([z.string(), z.date()]).optional() });
			export const empty = { title: '',description: '',place: '',duration: '',price: 0,currency: '',profileId: '',created_at: new Date() };
			 
			export function toDraft() {
				const data = { ...empty } as Event;
				const selected = schema.pick({ title: true,description: true,place: true,duration: true,price: true,currency: true,profileId: true,created_at: true })

				return { data, schema: selected };
			}

			
		