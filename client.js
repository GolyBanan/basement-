//пв
var v = AreaPlayerTriggerService.Get("v");
v.Tags = ["спавн"];
v.Enable = true;
v.OnEnter.Add(function(player) {
player.SpawnPointsGroup;
});
//пв
var pvp = AreaPlayerTriggerService.Get("pvp");
pvp.Tags = ["pvp"];
pvp.Enable = true;
pvp.OnEnter.Add(function(player) {
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.contextedProperties.SkinType.Value = 0;
 }
);
pvp.OnExit.Add(function(player) {
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.contextedProperties.SkinType.Value = 1;
 }
);
//пв
var Door = AreaPlayerTriggerService.Get("Door");
Door.Tags = ["door"];
Door.Enable = true;
Door.OnEnter.Add(function(player) {});
//пв
var DoorOpen = AreaPlayerTriggerService.Get("DoorOpenTrigger");
DoorOpen.Tags = ["dooropenAreaTag"];
DoorOpen.Enable = true;
DoorOpen.OnEnter.Add(function(player) {
  if (player.Properties.Get("door").Value >= 1){
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,23);
  player.Properties.Get("door").Value -= 75;
  player.Ui.Hint.Value = "вы закрыли дверь";
  }else{
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,0);
  player.Properties.Get("door").Value += 75;
  player.Ui.Hint.Value = "вы открыли дверь";
  }
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("грены")
adcTrigger.Tags = ["грены"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("бог")
adcTrigger.Tags = ["бог"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость бога 750 монет";
if (player.Properties.Scores.Value > 750){
player.Properties.Scores.Value -= 750;
player.Properties.Get("статус").Value = "<b><color=purple>БОГ</a></b>"
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("Элит")
adcTrigger.Tags = ["Элит"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость Элитного игрока 500 монет";
if (player.Properties.Scores.Value > 500){
player.Properties.Scores.Value -= 500;
player.Properties.Get("статус").Value = "<color=blue>Элитный Игрок</a>"
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("Фокси")
adcTrigger.Tags = ["Фокси"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость Фокси 500 монет"
if (player.Properties.Scores.Value > 500){
player.Properties.Scores.Value -= 500;
player.Properties.Get("статус").Value = "<i><color=pink>Foksi</a></i>"
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("Фреди")
adcTrigger.Tags = ["Фреди"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость Fredi 750 монет"
if (player.Properties.Scores.Value > 750){
player.Properties.Scores.Value -= 750;
player.Properties.Get("статус").Value = "<i><color=lime>Fredi</a></i>"
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("хп200")
adcTrigger.Tags = ["хп200"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость 200 хп 1000 монет";
if (player.Properties.Scores.Value > 1000){
player.Properties.Scores.Value -= 1000;
player.contextedProperties.MaxHp.Value = 200;
player.Spawns.Spawn();
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("хп500")
adcTrigger.Tags = ["хп500"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость 500 хп 5000 монет";
if (player.Properties.Scores.Value > 5000){
player.Properties.Scores.Value -= 5000;
player.contextedProperties.MaxHp.Value = 500;
player.Spawns.Spawn();
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("хп1000")
adcTrigger.Tags = ["хп1000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость 1000 хп 10000 монет"
if (player.Properties.Scores.Value > 10000){
player.Properties.Scores.Value -= 10000;
player.contextedProperties.MaxHp.Value = 1000;
player.Spawns.Spawn();
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("хп2000")
adcTrigger.Tags = ["хп2000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "стоимость 2000 хп 20000 монет"
if (player.Properties.Scores.Value > 20000){
player.Properties.Scores.Value -= 20000;
player.contextedProperties.MaxHp.Value = 2000;
player.Spawns.Spawn();
}
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("нож2")
adcTrigger.Tags = ["нож2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Melee.Value = true;
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("статус:гл.адм")
adcTrigger.Tags = ["статус:гл.адм"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Get("статус").Value = "<color=Red>Г</a><color=Blue>Л</a>.<color=Red>А</a><color=orange>Д</a><color=blue>М</a>";
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("статус:лд")
adcTrigger.Tags = ["статус:лд"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Get("статус").Value = "<color=Red>Л</a><color=Blue>Д</a>";
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("статус:лп")
adcTrigger.Tags = ["статус:лп"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Get("статус").Value = "<color=Red>Л</a><color=Blue>П</a>";
});
//двери
var adcTrigger =
AreaPlayerTriggerService.Get("статус:вип")
adcTrigger.Tags = ["статус:вип"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Get("статус").Value = "<color=yellov>Vip</a>";
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("Пвп")
adcTrigger.Tags = ["Пвп"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = false;
player.inventory.MainInfinity.Value = false;
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.inventory.ExplosiveInfinity.Value = false;
player.Ui.Hint.Value = "ПВП ВЫКЛЮЧЕНО"
if (player.Properties.Scores.Value > 999999){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("пвп в")
adcTrigger.Tags = ["пвп в"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = false;
player.inventory.MainInfinity.Value = false;
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.inventory.ExplosiveInfinity.Value = false;
player.inventory.Build.Value = false;
player.inventory.BuildInfinity.Value = false;
player.Ui.Hint.Value = "ПВП ВЫКЛЮЧЕНО"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("зеленый")
adcTrigger.Tags = ["зеленый"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Green").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("красный")
adcTrigger.Tags = ["красный"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Red").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("розовый")
adcTrigger.Tags = ["розовый"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("pink").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("синий")
adcTrigger.Tags = ["синий"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Blue").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("с.очки")
adcTrigger.Tags = ["с.очки"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Scores.Value += 1000000000;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("100")
adcTrigger.Tags = ["100"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону монет по 100 ,вип 2"
player.Properties.Scores.Value += 100;
player.Properties.Spawns.Value += 100;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("1000")
adcTrigger.Tags = ["1000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону по 1000 монет , вип 3"
player.Properties.Scores.Value += 1000;
player.Properties.Spawns.Value += 1000;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("очки")
adcTrigger.Tags = ["очки"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Scores.Value += 5;
player.Ui.Hint.Value = "ВОТ СТОКА У ТЕБЯ МОНЕТ" +player.Properties.Scores.Value;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин1")
adcTrigger.Tags = ["скин1"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин0")
adcTrigger.Tags = ["скин0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ИГРОКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин2")
adcTrigger.Tags = ["скин2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 2;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин3")
adcTrigger.Tags = ["скин3"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 1;
Ui.GetContext.Hint.Value = "ВСЕ ПОЛУЧИЛИ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин4")
adcTrigger.Tags = ["скин4"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 2;
Ui.GetContext.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля")
adcTrigger.Tags = ["сопля"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СОПЛЮ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля0")
adcTrigger.Tags = ["сопля0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОУЛЧИЛ АДМИНКУ ВМЕСТО СОПЛИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("бессмертия")
adcTrigger.Tags = ["бессмертия"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ БЕССМЕРТИЯ 15000 РУБ"
if (player.Properties.Scores.Value > 15000){
player.Properties.Scores.Value -= 15000;
player.Damage.DamageIn.Value = false;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ БЕССМЕРТИЯ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("автомат")
adcTrigger.Tags = ["автомат"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ АВТОМАТА 6000 РУБ"
if (player.Properties.Scores.Value > 6000){
player.Properties.Scores.Value -= 6000;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АВТОМАТ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("Осн")
adcTrigger.Tags = ["Осн"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АВТОМАТ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("полет")
adcTrigger.Tags = ["полет"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ПОЛЕТА 15000 РУБ"
if (player.Properties.Scores.Value > 15000){
player.Properties.Scores.Value -= 15000;
player.Build.FlyEnable.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПОЛЕТ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("гранаты")
adcTrigger.Tags = ["гранаты"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ГРАНАТ 900 РУБ"
if (player.Properties.Scores.Value > 900){
player.Properties.Scores.Value -= 900;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ГРАНАТЫ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("нож")
adcTrigger.Tags = ["нож"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ НОЖ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("пест")
adcTrigger.Tags = ["пест"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ПИСТОЛЕТА 3000 РУБ"
if (player.Properties.Scores.Value > 3000){
player.Properties.Scores.Value -= 3000;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПИСТОЛЕТ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("тел")
adcTrigger.Tags = ["тел"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.MaxHp.Value = 200;
player.Spawns.Spawn();
player.Ui.Hint.Value = "😘";
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("дошик")
adcTrigger.Tags = ["дошик"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "Ооо дошик";
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("дигл")
adcTrigger.Tags = ["дигл"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПИСТОЛЕТ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("гл.адм2")
adcTrigger.Tags = ["гл.адм2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ гл.админки 1000 РУБ"
if (player.Properties.Scores.Value > 1000){
player.Properties.Scores.Value -= 1000;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.Build.FlyEnable.Value = true;
player.Damage.DamageIn.Value = false;
player.Build.ChangeSpawnsEnable.Value = true;
player.Build.BuildRangeEnable.Value = true;
player.Build.ChangeMapAuthorsEnable.Value = true;
player.Build.LoadMapEnable.Value = true;
player.Build.RenameMapEnable.Value = true;
player.Build.CollapseChangeEnable.Value = true;
player.Build.BuildModeEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;
player.Build.QuadChangeEnable.Value = true;
player.Build.Pipette.Value = true;
player.Build.BalkLenChange.Value = true;
player.Properties.Get("статус").Value = "<color=Blue>Гл.Адм</a>";
player.Properties.Deaths.Value += 501;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ГЛ.АДМ"
if (player.Properties.Deaths.Value > 500){
player.Properties.Deaths.Value -= 1000;
player.Properties.Deaths.Value += 2;
}
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("адми")
adcTrigger.Tags = ["адми"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ АДМИНКИ 20000 РУБ"
if (player.Properties.Scores.Value > 20000){
player.Properties.Scores.Value -= 20000;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.Build.FlyEnable.Value = true;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.Damage.DamageIn.Value = false;
player.Properties.Get("статус").Value = "<color=Blue>АДМ</a>";
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ";
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("стройка")
adcTrigger.Tags = ["стройка"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.inventory.Melee.Value = true;
Build.GetContext().FloodFill.Value = true;
Build.GetContext().FillQuad.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().BuildRangeEnable.Value = true;
Build.GetContext().FlyEnable.Value = true;
Build.GetContext().Pipette.Value = true;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("адм")
adcTrigger.Tags = ["адм"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.Build.FlyEnable.Value = true;
player.contextedProperties.MaxHp.Value = 999999999;
player.Properties.Get("статус").Value = "<color=Blue>АДМ</a>";
player.Properties.Deaths.Value += 100;
if (player.Properties.Deaths.Value > 100){
player.Properties.Deaths.Value -= 199;
player.Properties.Deaths.Value -= 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("а")
adcTrigger.Tags = ["а"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.Build.FlyEnable.Value = true;
player.contextedProperties.MaxHp.Value = 999999999;
player.Build.ChangeSpawnsEnable.Value = true;
player.Build.BuildRangeEnable.Value = true;
player.Build.ChangeMapAuthorsEnable.Value = true;
player.Build.LoadMapEnable.Value = true;
player.Build.RenameMapEnable.Value = true;
player.Build.CollapseChangeEnable.Value = true;
player.Build.BuildModeEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;
player.Build.SetSkyEnable.Value = true;
player.Build.QuadChangeEnable.Value = true;
player.Build.Pipette.Value = true;
player.Build.FillQuad.Value = true;
player.Build.FloodFil.Value = true;
player.Build.BalkLenChange.Value = true;
player.Properties.Get("статус").Value = "<color=Blue>ГЛ.АДМ</a>";
player.Properties.Scores.Value += 1000;
if (player.Properties.Scores.Value > 1000){
player.Properties.Deaths.Value -= 999;
player.Properties.Deaths.Value -= 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ГЛ.АДМ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("рестарт")
adcTrigger.Tags = ["рестарт"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Game.RestartGame();
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("бан")
adcTrigger.Tags = ["бан"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(p){
Ban(ato);
p.Ui.Hint.Value = "вас забанила зашита антисофт"
function Ban(player){
p=player
p.Spawns.Spawn();
p.Spawns.Despawn();
p.Build.BuildRangeEnable.Value=false;
Ui.GetContext().Hint.Value = ato+" ЗАБАНЕН ";
}
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("выбор2")
adcTrigger.Tags = ["выбор2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(p){
ato = list[curenc];
p.Ui.Hint.Value="выбран "+ato;
if(curenc < (list.length - 1))curenc++;
else curenc = 0;
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("выбор")
adcTrigger.Tags = ["выбор"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(){
list = [];
curenc = 0;
ato = 0;
var e = Players.GetEnumerator();
while(e.moveNext()){
list.push(e.Current);
}
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("хп")
adcTrigger.Tags = ["хп"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.MaxHp.Value = Infinity;
});
// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = false;
//���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = false;
Damage.GetContext().FriendlyFire.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = false;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
contextedProperties.GetContext().MaxHp.Value = 99;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Green", "<size=30><color=#5eecff>И</color><color=#60efe4>Г</color><color=#62f2c9>Р</color><color=#64f5ae>О</color><color=#66f893>К</color><color=#68fb78>И</color></size>", { g: 30 });
	Teams.Get("Green").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "<size=30><color=#5eecff>И</color><color=#60efe4>Г</color><color=#62f2c9>Р</color><color=#64f5ae>О</color><color=#66f893>К</color><color=#68fb78>И</color></size>", { b: 1 });	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){Teams.Get("Blue").Add(player);
{
player.Properties.Get("статус").Value = "<color=Blue>Охраник</a>";
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("ник")
adcTrigger.Tags = ["ник"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "твой ник "+ player;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("айди")
adcTrigger.Tags = ["айди"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "твой айди "+ ID;
});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()
Ui.GetContext().Hint.Value = player +"Ку бро";if (player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C" ||
player.id == "51F1AB487954C59C"){
player.inventory.MainInfinity.Value =
true;
player.inventory.Main.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.Build.BuildRangeEnable.Value = true;
player.Build.ChangeSpawnsEnable.Value = true;
player.Build.RenameMapEnable.Value = true;
player.Build.ChangeMapAuthorsEnable.Value = true;
player.Build.LoadMapEnable.Value = true;
player.Build.QuadChangeEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;
player.Build.BuildModeEnable.Value = true;
player.Build.CollapseChangeEnable.Value = true;
player.Build.SetSkyEnable.Value = true;
player.Build.GenMapEnable.Value = true;
player.Build.FloodFill.Value = true;
player.Build.BalkLenChange.Value = true;
player.Build.RemoveQuad.Value = true;
player.Build.Pipette.Value = true;
player.Build.FillQuad.Value = true;
player.contextedProperties.MaxHp.Value = 9999999999999;
player.Build.FlyEnable.Value = true;
player.contextedProperties.SkinType.Value = 0;
player.Properties.Deaths.Value += 1000000000;
player.Properties.Scores.Value += 100;
player.Properties.Get("статус").Value = "<color=Blue>ГЛ.АДМ</a>";
}
});

WaitingPlayersTime = 1;
BuildBaseTime = 1;
ModeTime = 1;
BaseTime = 1;
BTime = 1;
WaitingStateValue = "Waiting";
BuildModeStateValue = "BuildMode";
ModeStateValue = "Mode";
BaseStateValue = "Base";
WStateValue = "W";
mainTimer = Timers.GetContext().Get("Main");
stateProp = Properties.GetContext().Get("State");
mainTimer.OnTimer.Add(function() {
switch (stateProp.Value) {
case WaitingStateValue:SetBuildMode();
break;
case BuildModeStateValue: SetMode();
break;
case ModeStateValue : SetM();
break;
case BaseStateValue: Set();
break;
case WStateValue: SetWaitingMode();
 }
});
var yellowView = AreaViewService.GetContext().Get("YellowView");
yellowView.Color = {r:0};
yellowView.Tags = ["buy"];
yellowView.Enable = true;
var redtrigger = AreaPlayerTriggerService.Get("redTrigger");
redtrigger.Tags = ["buy"];
redtrigger.Enable = true;
redtrigger.OnEnter.Add(function(player){});

SetWaitingMode();
function SetWaitingMode() {
yellowView.Color = {r:1}
 stateProp.Value = WaitingStateValue;
 mainTimer.Restart(WaitingPlayersTime);
}
function SetBuildMode() {
yellowView.Color = {b:1}
 stateProp.Value = BuildModeStateValue;
 mainTimer.Restart(BuildBaseTime);
}
function SetMode() {
yellowView.Color = {r:1,b:1,g:1}
 stateProp.Value = ModeStateValue;
 mainTimer.Restart(ModeTime);
}
function SetM() {
yellowView.Color = {r:0}
 stateProp.Value = BaseStateValue;
 mainTimer.Restart(BaseTime);
}
function Set() {
yellowView.Color = {r:1,b:19}
 stateProp.Value = WStateValue;
 mainTimer.Restart(BTime);
}
// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.Build.Value = false;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// счетчик убийств
Damage.OnKill.Add(function(player, killed) {
	if (killed.Team != null && killed.Team != player.Team) {
		++player.Properties.Kills.Value;
		player.Properties.Scores.Value += 120;
	}
});
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
	{
		Value: "Kills",
		DisplayName: "<color=Black>УБИЙСТВА</a>",
		ShortDisplayName: "<color=Black>УБИЙСТВА</a>"
	},
	{
		Value: "Deaths",
		DisplayName: "ЛВЛ",
		ShortDisplayName: "<color=Red>ЛВЛ</a>"
	},
	{
		Value: "статус",
		DisplayName: "<color=Blue>СТАТУС</a>",
		ShortDisplayName: "<color=Blue>СТАТУС</a>"
	},
	{
		Value: "Scores",
		DisplayName: "<color=Red>МОНЕТЫ</a>",
		ShortDisplayName: "<color=Red>МОНЕТЫ</a>"
	}
];
// вес команды в лидерборде
LeaderBoard.TeamWeightGetter.Set(function(team) {
	return team.Properties.Get("Deaths").Value;
});
// вес игрока в лидерборде
LeaderBoard.PlayersWeightGetter.Set(function(player) {
	return player.Properties.Get("Kills").Value;
});
Spawns.GetContext().RespawnTime.Value = 0;
