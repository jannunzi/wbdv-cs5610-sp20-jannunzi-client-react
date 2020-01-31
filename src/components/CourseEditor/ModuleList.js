import React from "react";
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <ul>
        {
            modules.map(module =>
                <ModuleListItem
                    key={module._id}
                    module={module}/>
            )
        }
    </ul>

export default ModuleList
