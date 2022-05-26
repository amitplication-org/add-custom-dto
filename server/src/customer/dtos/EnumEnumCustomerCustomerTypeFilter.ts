import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EnumCustomerCustomerType } from "../base/EnumCustomerCustomerType";

@InputType({
  isAbstract: true,
})
export class EnumEnumCustomerCustomerTypeFilter {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @Field(() => EnumCustomerCustomerType, {
    nullable: true,
  })
  @Type(() => String)
  equals?: EnumCustomerCustomerType;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsOptional()
  @Field(() => [EnumCustomerCustomerType], {
    nullable: true,
  })
  @Type(() => String)
  in?: EnumCustomerCustomerType[];

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsOptional()
  @Field(() => [EnumCustomerCustomerType], {
    nullable: true,
  })
  @Type(() => String)
  notIn?: EnumCustomerCustomerType[];

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @Field(() => EnumCustomerCustomerType, {
    nullable: true,
  })
  @Type(() => String)
  not?: EnumEnumCustomerCustomerTypeFilter;
}
