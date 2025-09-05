import { Button, Card, CardBody, CardHeader, Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { MdHistoryEdu } from "react-icons/md";
import { useModelStore } from '../model/Model';
import { extractedEntitiesToNodeEntities } from "../model/prompts/textExtractors/EntitiesExtractor";
import { extractedLocationsToNodeLocations } from "../model/prompts/textExtractors/LocationsExtractor";
import { extractedActionsToEdgeActions } from "../model/prompts/textExtractors/SentenceActionsExtractor";
import { VisualRefresher } from "../model/prompts/textExtractors/VisualRefresher";
import { dataTextAlice, textAlice } from "../study/data/TextAlice";
import { dataTextB, textB } from "../study/data/TextB";
import { dataTextD, textD } from "../study/data/TextD";
import { useStudyStore } from "../study/StudyModel";

export default function Launcher() {
  const [accessKey, setAccessKey] = useState('');
  const [pid, setPid] = useState(-1);
  const setOpenAIKey = useModelStore((state) => state.setOpenAIKey);
  const resetModel = useModelStore((state) => state.reset);
  const resetStudyModel = useStudyStore((state) => state.reset);

  function startExample(text : string, data : any) {
    resetModel();
    resetStudyModel();

    useModelStore.getState().setTextState([{ children: [{text: text }] }], true, false);
    useModelStore.getState().setIsStale(false);
    VisualRefresher.getInstance().previousText = useModelStore.getState().text;
    VisualRefresher.getInstance().onUpdate();

    if (data) {
        const entityNodes = extractedEntitiesToNodeEntities(data);
        const locationNodes = extractedLocationsToNodeLocations(data);
        const actionEdges = data.actions.map((h : any) => extractedActionsToEdgeActions({actions: [h]}, h.passage, entityNodes)).flat();
        useModelStore.getState().setEntityNodes(entityNodes);
        useModelStore.getState().setLocationNodes(locationNodes);
        useModelStore.getState().setActionEdges(actionEdges);
    } else {
        const locationNodes = extractedLocationsToNodeLocations({
            locations: [{
                name: "unknown",
                emoji: "🌍",
            }]
        });

        useModelStore.getState().setLocationNodes(locationNodes);
        useModelStore.getState().setEntityNodes([]);
        useModelStore.getState().setActionEdges([]);
    }

    window.location.hash = '/free-form' + `?k=${btoa(accessKey)}`;
}

  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <Card>
        <CardHeader><span style={{fontSize: 25}}><MdHistoryEdu /></span><span style={{marginLeft: 5}}>可视化故事写作</span></CardHeader>
        <Divider />
        <CardBody>
            <p>要运行下面的示例，请粘贴您的OpenAI API密钥。您可以从<a href="https://platform.openai.com/account/api-keys">这里</a>获取。</p>
            <Input variant="faded" label="API密钥" placeholder="sk-..." style={{marginTop: 10}}
            onChange={(e) => {
                setAccessKey(e.target.value);
                setOpenAIKey(e.target.value);
            }}
            ></Input>
        </CardBody>
        <Divider />
        <CardBody>
            <span style={{fontWeight: 800}}>快速试用可视化故事写作示例</span>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 40, marginTop: 10}}>
                <Button 
                isDisabled={accessKey.length === 0}
                    onClick={() => {
                        startExample(textAlice, dataTextAlice)
                    }}
                >爱丽丝梦游仙境</Button>
                
                <Button
                isDisabled={accessKey.length === 0}
                onClick={() => {
                    startExample(textB, dataTextB)
                }}  
                >雪橇冒险</Button>

<Button
                isDisabled={accessKey.length === 0}
                onClick={() => {
                    startExample(textD, dataTextD)
                }}  
                >海浪相隔</Button>

                <Button
                isDisabled={accessKey.length === 0}
                    onClick={() => {
                        startExample("", null);
                    }}
                >空白页面</Button>
            </div>
        </CardBody>
        <Divider />
        <CardBody>
            <span style={{fontWeight: 800}}>运行研究1</span>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', gap: 40, marginTop: 10}}>
                <Select isDisabled={accessKey.length === 0}
                variant="faded" label="参与者ID" className="max-w-xs" 
                onChange={(e) => setPid(parseInt(e.target.value))}>
                    {
                        Array.from({length: 12}, (_, i) => i).map((i) => <SelectItem key={i} value={i+1} textValue={"P" + (i+1)}>P{i+1}</SelectItem>)
                    }
                </Select>
                <Button
                    isDisabled={accessKey.length === 0 || pid === -1}
                    onClick={() => {
                        resetModel();
                        resetStudyModel();
                        window.location.hash = '/study' + '?pid=' + (pid+1) + `&k=${btoa(accessKey)}` + '&studyType=READING';
                    }}
                >开始</Button>
            </div>
        </CardBody>
        <Divider />
        <CardBody>
            <span style={{fontWeight: 800}}>运行研究2</span>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', gap: 40, marginTop: 10}}>
                <Select isDisabled={accessKey.length === 0}
                variant="faded" label="参与者ID" className="max-w-xs" 
                onChange={(e) => setPid(parseInt(e.target.value))}>
                    {
                        Array.from({length: 12}, (_, i) => i).map((i) => <SelectItem key={i} value={i+1} textValue={"P" + (i+1)}>P{i+1}</SelectItem>)
                    }
                </Select>
                <Button
                    isDisabled={accessKey.length === 0 || pid === -1}
                    onClick={() => {
                        resetModel();
                        resetStudyModel();
                        window.location.hash = '/study' + '?pid=' + (pid+1) + `&k=${btoa(accessKey)}` + '&studyType=WRITING';
                    }}
                >开始</Button>
            </div>
        </CardBody>
    </Card>
    </div>
}