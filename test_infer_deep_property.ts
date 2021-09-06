interface ICondition {
  type: string;
  id?: number;
  selectedPropertyId?: number;
  [PropertyTypeKeysEnum.NUMBER]?: INumberProperty;
  [PropertyTypeKeysEnum.STRING]?: IStringProperty;
}
interface IConditionsObj {
  [K: number]: ICondition;
}
export enum PropertyTypeKeysEnum {
  NUMBER = "numberPropertyFields",
  STRING = "stringPropertyFields",
}

interface INumberProperty {
  moreThen?: number;
  lessThen?: number;
  equals?: string;
}

interface IStringProperty {
  mask?: string;
  regular?: string;
  equals?: string;
}

const obj: IConditionsObj = {
  1: {
    type: "ssss",
    numberPropertyFields: {
      moreThen: 1,
      lessThen: 1,
    },
  },
  2: {
    type: "ssss",
    numberPropertyFields: {
      moreThen: 1,
      lessThen: 1,
    },
  },
};

export const getPropertyField = <
  TypeKey extends PropertyTypeKeysEnum,
  FieldNameKey extends keyof ICondition[TypeKey]
>(
  propertyType: TypeKey,
  propertyName: FieldNameKey,
  obj: IConditionsObj,
  conditionId: number
) => {
  return obj[conditionId]?.[propertyType]?.[propertyName];
};

const field = getPropertyField(PropertyTypeKeysEnum.NUMBER, "moreThen", obj, 2);
