export type FieldData = {
    name: string;
    cropType: string;
    greenhouse: string;
    barn: string;
    irrigationSystem: string;
  };

  const fieldsData: FieldData[] = [
    {
      name: "Field 1",
      cropType: "Rice",
      greenhouse: "Greenhouse A",
      barn: "Barn 1",
      irrigationSystem: "Irrigation System 1",
    },
    {
      name: "Field 2",
      cropType: "Barley",
      greenhouse: "Greenhouse B",
      barn: "Barn 2",
      irrigationSystem: "Irrigation System 2",
    },
    {
      name: "Field 3",
      cropType: "Wheat",
      greenhouse: "Greenhouse C",
      barn: "Barn 3",
      irrigationSystem: "Irrigation System 3",
    },
    {
      name: "Field 4",
      cropType: "Corn",
      greenhouse: "Greenhouse D",
      barn: "Barn 4",
      irrigationSystem: "Irrigation System 4",
    },
    {
      name: "Field 5",
      cropType: "Soybeans",
      greenhouse: "Greenhouse E",
      barn: "Barn 5",
      irrigationSystem: "Irrigation System 5",
    },
  ];

  export default fieldsData;