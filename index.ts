import "reflect-metadata";
import {createConnection} from "typeorm";
import { Photo } from "./src/entity/Photo";
import {LoggedActions} from "./src/entity/LoggedActions";

createConnection().then(async connection => {
    const photo = new Photo();
    photo.description = "Description"
    photo.filename = "photo.jpg"
    photo.isPublished = false
    photo.name = "Photo";
    photo.views = 0;
    const photoRepository = connection.getRepository(Photo);
    await photoRepository.save(photo);

    photo.views += 1;
    await photoRepository.save(photo);

    const auditRepository = connection.getRepository(LoggedActions);
    const loggedActions = await auditRepository.find();
    console.log(loggedActions);
}).catch(error => console.log(error));
