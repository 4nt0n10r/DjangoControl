import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "djangocontrol" is now active!');

	let djangoCommands = vscode.commands.registerCommand('djangocontrol.djangoCommands', async () => {
		let options = ['changepassword', 'createsuperuser', 'remove_stale_contenttypes', 'check', 'compilemessages', 'createcachetable', 'dbshell', 'diffsettings', 'dumpdata', 'flush', 'inspectdb', 'loaddata', 'makemessages', 'makemigrations', 'migrate', 'sendtestemail', 'shell', 'showmigrations', 'sqlflush', 'sqlmigrate', 'sqlsequencereset', 'squashmigrations', 'startapp', 'startproject', 'test', 'testserver', 'clearsessions', 'collectstatic', 'findstatic', 'runserver'];
		let option = await showMenu(options, 'Select a command to run');
		switch (option) {
/* 			case 'changepassword':
				CommandTerminal('python manage.py changepassword');
				break; */
			case 'createsuperuser':
				CommandTerminal('python manage.py createsuperuser');
				break;
/* 			case 'remove_stale_contenttypes':
				CommandTerminal('python manage.py remove_stale_contenttypes');
				break;
			case 'check':
				CommandTerminal('python manage.py check');
				break;
			case 'compilemessages':
				CommandTerminal('python manage.py compilemessages');
				break;
			case 'createcachetable':
				CommandTerminal('python manage.py createcachetable');
				break; */
/* 			case 'dbshell':
				CommandTerminal('python manage.py dbshell');
				break; */
/* 			case 'diffsettings':
				CommandTerminal('python manage.py diffsettings');
				break; */
/* 			case 'dumpdata':
				CommandTerminal('python manage.py dumpdata');
				break;
			case 'flush':
				CommandTerminal('python manage.py flush');
				break;
			case 'inspectdb':
				CommandTerminal('python manage.py inspectdb');
				break;
			case 'loaddata':
				CommandTerminal('python manage.py loaddata');
				break;
			case 'makemessages':
				CommandTerminal('python manage.py makemessages');
				break; */
			case 'makemigrations':
				CommandTerminal('python manage.py makemigrations');
				break;
			case 'migrate':
				CommandTerminal('python manage.py migrate');
				break;
/* 			case 'sendtestemail':
				CommandTerminal('python manage.py sendtestemail');
				break;
			case 'shell':
				CommandTerminal('python manage.py shell');
				break; */
			case 'showmigrations':
				CommandTerminal('python manage.py showmigrations');
				break;
/* 			case 'sqlflush':
				CommandTerminal('python manage.py sqlflush');
				break;
			case 'sqlmigrate':
				CommandTerminal('python manage.py sqlmigrate');
				break;
			case 'sqlsequencereset':
				CommandTerminal('python manage.py sqlsequencereset');
				break;
			case 'squashmigrations':
				CommandTerminal('python manage.py squashmigrations');
				break; */
			case 'startapp':
				const appName = await vscode.window.showInputBox({ placeHolder: 'Enter app name' });
				if (appName) {
					CommandTerminal(`python manage.py startapp ${appName}`);
				}
				break;
			case 'startproject':
				const projectName = await vscode.window.showInputBox({ placeHolder: 'Enter project name' });
				if (projectName) {
					CommandTerminal(`django-admin startproject ${projectName} .`);
				}
				break;
/* 			case 'test':
				CommandTerminal('python manage.py test');
				break;
			case 'testserver':
				CommandTerminal('python manage.py testserver');
				break;
			case 'clearsessions':
				CommandTerminal('python manage.py clearsessions');
				break;
			case 'collectstatic':
				CommandTerminal('python manage.py collectstatic');
				break;
			case 'findstatic':
				CommandTerminal('python manage.py findstatic');
				break; */
			case 'runserver':
				CommandTerminal('python manage.py runserver');
				break;
		};
	});
}

function CommandTerminal(command: string) {
	let terminal = vscode.window.activeTerminal || vscode.window.createTerminal();
	terminal.show();
	terminal.sendText(command);
}

async function showMenu(options: string[], message: string) {
	const option = await vscode.window.showQuickPick(options, {
		placeHolder: message
	});
	return option;
}

export function deactivate() {}
