import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{ width: "500px", height: "500px" }}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          {name} consectetur adipisicing elit. Pariatur accusamus possimus, sunt
          dolores praesentium dolorum esse est quos rerum, earum in. Doloribus
          ex voluptatem soluta corrupti repellat consequuntur sequi maxime, hic
          ipsum accusamus amet in quisquam, quod sint fuga dolorum officiis
          nostrum error! Impedit inventore velit exercitationem explicabo sint
          accusamus iste, earum non totam ex porro, perferendis veri ulema
          exception.
        </Typography>
        {extraDetails.map((item) => (
          <Stack direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
