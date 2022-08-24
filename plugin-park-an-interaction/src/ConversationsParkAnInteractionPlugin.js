import React from 'react'
import {FlexPlugin} from '@twilio/flex-plugin'
import {CustomizationProvider} from '@twilio-paste/core/customization'
import './notifications'
import './actions'
import {Header} from "./components/Header/Header";
import {skipWrapping} from "./actions";

const PLUGIN_NAME = 'ConversationsParkAnInteractionPlugin'

export default class ConversationsParkAnInteractionPlugin extends FlexPlugin {
    constructor() {
        super(PLUGIN_NAME)
    }

    /**
     * This code is run when your plugin is being started
     * Use this to modify any UI components or attach to the actions framework
     *
     * @param flex { typeof import('@twilio/flex-ui') }
     * @param manager { import('@twilio/flex-ui').Manager }
     */
    async init(flex, manager) {
        flex.setProviders({
            PasteThemeProvider: CustomizationProvider
        })

        flex.MainHeader.Content.remove("logo");

        flex.TaskCanvasHeader.Content.replace(<Header key='conversation-park-button'/>, {
            if: props => props.channelDefinition.capabilities.has('Chat') && props.task.taskStatus === 'assigned'
        })

        flex.TaskListContainer.defaultProps.taskFilters = [{text:"Active tasks", callback: (task) => {
            if(task.status === "wrapping" || task.taskStatus === "wrapping") {
                console.log("task will be wrapped")
                skipWrapping({task})
                return false;
            }
            return true;
        }}];

    }
}
