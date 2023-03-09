import { ru as mobileTranslationsRu } from '../../mobile/translations';
import { LangType } from '../../translations';
import { nationalitiesNames } from '../../translations/nationalities';


export const pt = {
	'page.body.wallet.history.header': 'Histórico',
	/**Trade history */
	'page.body.trade.tab.myTrades': 'Ordens executadas',
	'page.body.trade.tab.marketTrades': 'Últimos negócios',
	/**New Order */
	'page.body.trade.header.newOrder.content.buyWith': 'Comprar com',
	'page.body.trade.header.newOrder.content.title.buy': 'Comprar',
	'page.body.trade.header.newOrder.content.title.sell': 'Vender',
	/**Logger */
	'page.body.user.loggin': 'Entrar',
	'page.body.user.register': 'Criar conta',
	/**Order History in Tradding page */
	'page.body.trade.header.orderHistory': 'Histórico de ordens',
	/**OrderBook */
	'page.body.trading.header.orderBook.header.title.price': 'Preço',
	'page.body.trading.header.orderBook.header.title.amount': 'Qtd',
	'page.body.trading.header.orderBook.header.title.sum': 'Volume',
	'page.body.trading.header.orderBook.header.title': 'Livro de ofertas',
	


	
	/**Vote */
	'page.body.vote.msg.success': 'Vote success',
	'page.body.vote.msg.fail': 'Vote fail',
	/**Airdrop Coin */
	'page.body.airdropCoin.claim.msg.success': 'Claim success',
	'page.body.airdropCoin.claim.msg.fail': 'Claim fail',

    /* Quick Exchange */
    'page.body.quick.exchange.header': 'Negociação instantânea',

    'page.body.quick.exchange.label.exchange': 'Você está negociando:',
    'page.body.quick.exchange.label.receive': 'Pelo valor de:',
    'page.body.quick.exchange.label.currency': 'Escolha o ativo',

    'page.body.quick.exchange.sublabel.min_amount': 'Quantidade mínima é de',
    'page.body.quick.exchange.sublabel.balance': 'Seu saldo é de:',

    'page.body.quick.exchange.estimated_price': 'Valor aproximado',
    'page.body.quick.exchange.slippage': 'Atenção: O slippage nesse instante é maior do que 1%. Recomendamos negociar uma quantidade menor para obtenção de melhores preços.',

    'page.body.quick.exchange.placeholder.exchange': 'Você está negociando',
    'page.body.quick.exchange.placeholder.receive': 'Pelo valor de',

    'page.body.quick.exchange.button.exchange': 'Negociar',

    'success.quick.exchange.order.created': 'Ordem enviada com sucesso',

	'page.homePage.trade.btn.trade': 'Negociar',

	'page.homePage.trade.btn.signup': 'Abra sua conta',

    'page.header.navbar.signIn': 'Acessar plataforma',
    'page.header.navbar.quick.exchange': 'Quick exchange',
    'page.header.navbar.trade': 'Exchange Pro',
    'page.header.navbar.wallets': 'Carteiras',
    'page.header.navbar.openOrders': 'Ordens abertas',
    'page.header.navbar.history': 'Histórico',
    'page.header.navbar.api': 'Documentação da API',
    'page.header.navbar.internal.transfer': 'Internal transfer',
    'page.header.navbar.p2p': 'P2P',

	'page.header.signUp': 'Criar conta',

	'page.header.signIn': 'Acessar plataforma',
	'page.header.signIn.email': 'Email',
	'page.header.signIn.password': 'Senha',
	'page.header.signIn.password.message.error': 'Senha inválida',
	'page.header.signIn.receiveConfirmation': `Didn't receive your confirmation email?`,
	'page.header.signIn.forgotPassword': 'Esqueceu sua senha?',
	'page.header.signIn.resetPassword.title': 'Alterar senha',
	'page.header.signIn.resetPassword.newPassword': 'Nova senha',
	'page.header.signIn.resetPassword.repeatPassword': 'Repita a nova senha',
	'page.header.signIn.resetPassword.button': 'Alterar',
	'page.header.signIn.resetPassword.error': 'Dados incompletos ou inválidos',

	'page.password2fa.message': 'Digite os números gerados para ativar a autenticação',
	'page.body.profile.whitelisted.paste': 'Colar',

	    /* Landing */
		'page.body.landing.header.button1': 'Perfil',
		'page.body.landing.header.button2': 'Acessar plataforma',
		'page.body.landing.header.button3': 'Criar conta',
	
		'page.body.landing.marketInfo.title.text1': 'Bem-vindo à Fortem ONE.',
		'page.body.landing.marketInfo.title.text2': 'Buy, sell and trade digital currency.',
		'page.body.landing.marketInfo.title.button': 'start trading',
	
		'page.body.landing.platformInfo.item.first.value': '30M+',
		'page.body.landing.platformInfo.item.first.title': 'Customers served',
		'page.body.landing.platformInfo.item.second.value': '$3M+',
		'page.body.landing.platformInfo.item.second.title': '30 days volume',
		'page.body.landing.platformInfo.item.third.value': '101',
		'page.body.landing.platformInfo.item.third.title': 'Countries supported',
	
		'page.body.landing.register.item.title': 'No matter your experience level',
		'page.body.landing.register.item.text': 'Baseapp offers an intuitive interface with real time orderbooks, charting tools, trade history, and a simple order process so you can trade from day one.',
		'page.body.landing.register.item.button': 'register',
	
		'page.body.landing.features.title': 'Baseapp platform features',
		'page.body.landing.features.features.item1.title': 'Exchange',
		'page.body.landing.features.features.item2.title': 'Order Types',
		'page.body.landing.features.features.item3.title': 'Customizable Interface',
		'page.body.landing.features.features.item4.title': 'Security',
		'page.body.landing.features.features.item5.title': 'Community',
		'page.body.landing.features.features.item6.title': 'Industry leading API',
		'page.body.landing.features.features.item1.text': 'Baseapp offers the most liquid order book in the world, allowing users to easily exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO and many other digital assets with minimal slippage.',
		'page.body.landing.features.features.item2.text': 'Baseapp offers a suite of order types to give traders the tools they need for every scenario. Discover more about our most advanced Algorithmic orders types.',
		'page.body.landing.features.features.item3.text': 'Organize your workspace according to your needs: compose your layout, choose between themes, set up notifications and data preferences.',
		'page.body.landing.features.features.item4.text': 'Security of user information and funds is our first priority. Contact us to learn more about our security features and integrations.',
		'page.body.landing.features.features.item5.text': 'Join a global community that believes in the power of crypto.',
		'page.body.landing.features.features.item6.text': 'Our Websocket feed lets you easily gain access to real-time market data, while our trading API lets you develop secure, programmatic trading bots.',
	
		'page.body.landing.tradeOnTheGo.item.title': 'Trade on the go',
		'page.body.landing.tradeOnTheGo.item.text1': 'Our platform is optimized for trading on any device.',
		'page.body.landing.tradeOnTheGo.item.text2': 'And you don’t need to download any additional applications.',
		'page.body.landing.tradeOnTheGo.item.text3': 'All the power of Baseapp cryptocurrency exchange, in the palm of your hand.',
		'page.body.landing.tradeOnTheGo.item.button': 'let’s try',
	
		'page.body.landing.startTrading.title': 'Start trading now',
		'page.body.landing.startTrading.button1': 'register',
		'page.body.landing.startTrading.button2': 'Start trading',
	
		'page.body.landing.footer.exchange': 'Exchange',
		'page.body.landing.footer.wallets': 'Wallets',
		'page.body.landing.footer.fees': 'Fees',
		'page.body.landing.footer.faq': 'FAQ',
		'page.body.landing.footer.support': 'Support',
		'page.body.landing.footer.privacy': 'Privacy',
		'page.body.landing.footer.about': 'About us',
		'page.body.landing.footer.community': 'Community',
		'page.body.landing.footer.info': 'Info',
		'page.body.landing.footer.rights': 'Baseapp © All rights reserved.',
	
		'pagy.body.footer.powered_by': 'Сделано',

		/* Wallets */
	'page.body.wallets.estimated_value_dolar': 'Valor aproximado em Reais: ',
	'page.body.wallets.estimated_value_btc': 'Valor aproximado em BTC: ',
	'page.body.wallets.estimated_value': 'Patrimônio total aproximado: ',

	'page.body.wallets.locked': 'Saldo bloqueado (em uso)',
	'page.body.wallets.balance': 'Saldo disponível',
	'page.body.wallets.tabs.deposit': 'Depositar',
	'page.body.wallets.tabs.deposit.disabled.message': 'Os depósitos para este ativo estão desabilitados',
	'page.body.wallets.tabs.deposit.ccy.message.confirmation':
		'1. Os ativos serão creditados após {confirmations} confirmações de rede (blockchain).',
	'page.body.wallets.tabs.deposit.ccy.message.mindeposit': '2. Min Depósito: {min_deposit_amount} {currency}',
	//'page.body.wallets.tabs.deposit.ccy.message.depositfee': '3. Taxa: {deposit_fee} {currency}',
	'page.body.wallets.tabs.deposit.ccy.message.depositfee': '3. Taxa de depósito: 0 %',
	'page.body.wallets.tabs.deposit.ccy.message.address': 'Endereço da carteira',
	'page.body.wallets.tabs.deposit.ccy.message.button': 'Copiar',
	'page.body.wallets.tabs.deposit.ccy.message.success': 'Endereço copiado',
	'page.body.wallets.tabs.deposit.ccy.message.error': 'Gerando endereço de depósito',
	'page.body.wallets.tabs.deposit.ccy.button.generate': 'Gerar endereço para depósito de ',
	'page.body.wallets.tabs.deposit.ccy.button.address': ' ',
	'page.body.wallets.tabs.deposit.ccy.message.submit': 'Faça seu depósito utilizando o endereço de carteira abaixo ou utilize o QR Code gerado. Seu depósito será creditado após {confirmations} confirmações de rede.',
	'page.body.wallets.tabs.deposit.ccy.message.pending': 'Gerando endereço de depósito',


	'page.body.wallets.tabs.deposit.fiat.message1': 'Os depósitos na sua carteira BRL devem ser feitos por PIX.',
	'page.body.wallets.tabs.deposit.fiat.message2':
		'Certifique-se de que o nome e o número de CPF da sua conta bancária corresponde com o nome civil associado à sua conta Fortem. Seu depósito será creditado na sua carteira Fortem em até 1 hora.',
	'page.body.wallets.tabs.deposit.fiat.bankName': 'CNPJ',
	'page.body.wallets.tabs.deposit.fiat.accountNumber': 'Nome do titular da conta',
	'page.body.wallets.tabs.deposit.fiat.accountName': 'Código do banco',
	'page.body.wallets.tabs.deposit.fiat.phoneNumber': 'Agência',
	'page.body.wallets.tabs.deposit.fiat.referenceCode': 'Seu ID',
	'page.body.wallets.table.pending': 'Em processamento',
	'page.body.wallets.table.rejected': 'Recusado',
	'page.body.wallets.tabs.deposit.fiat.admin': ' To initiate a fiat withdrawal, please contact administrator!',

	'page.body.wallets.tabs.withdraw': 'Sacar',
	'page.body.wallets.tabs.withdraw.content.amount': 'Quantidade',
	'page.body.wallets.tabs.withdraw.content.code2fa': 'Código 2FA',
	'page.body.wallets.tabs.withdraw.content.fee': 'Taxa de rede:  ',
	'page.body.wallets.tabs.withdraw.content.total': 'Quantidade a receber:  ',
	'page.body.wallets.tabs.withdraw.content.button': 'Sacar',
	'page.body.wallets.tabs.withdraw.disabled.message': 'Os saques para este ativo estão desabilitados. Em caso de dúvidas, entre em contato com o suporte.',

	'page.body.wallets.tabs.withdraw.amount.larger': 'Quantidade deve ser maior do que ',
	'page.body.wallets.tabs.withdraw.2FA.missing': 'Insira seu código 2FA',
	'page.body.wallets.tabs.withdraw.beneficiary.pending': 'Preencha o endereço de destino',
	'page.body.wallets.tabs.withdraw.beneficiary.incorrect': 'Endereço de destino incorreto',
	'page.body.wallets.tabs.withdraw.limit24': 'Limite de saque 24h excedido',

	'page.body.wallets.tabs.withdraw.waiting': `Por favor, aguarde o processamento... Não feche esta janela.`,

	'page.body.wallets.tabs.withdraw.modal.confirmation': 'Confirmação',
	'page.body.wallets.tabs.withdraw.modal.message1': 'Você receberá ',
	'page.body.wallets.tabs.withdraw.modal.message2': ' no endereço ',
	'page.body.wallets.tabs.withdraw.modal.message3': ' and your ETH tokens remains ',
	'page.body.wallets.tabs.withdraw.modal.button.cancel': 'Cancelar',
	'page.body.wallets.tabs.withdraw.modal.button.withdraw': 'Sacar',

	'page.body.wallets.tabs.withdraw.content.enable2fa': 'Para sacar, você precisa habilitar o 2FA.',
	'page.body.wallets.tabs.withdraw.content.enable2faButton': 'Habilitar 2FA',

	'success.beneficiaries.created': 'Destinatários: criado com sucesso',
	'success.beneficiaries.activated': 'Destinatários: ativados com sucesso',
	'success.beneficiaries.deleted': 'Destinatários: removido com sucesso',

	'page.body.wallets.beneficiaries.title': 'Endereço de destino',
	'page.body.wallets.beneficiaries.fiat.title': 'Detalhes do saque',
	'page.body.wallets.beneficiaries.dropdown.address': 'Endereço',
	'page.body.wallets.beneficiaries.dropdown.select': 'Selecione a carteira',
	'page.body.wallets.beneficiaries.dropdown.name': 'Carteira',
	'page.body.wallets.beneficiaries.dropdown.pending': 'Em processamento',

	'page.body.wallets.beneficiaries.dropdown.fiat.account': 'Conta',
	'page.body.wallets.beneficiaries.dropdown.fiat.bankOfBeneficiary': 'Bank of Beneficiary',
	'page.body.wallets.beneficiaries.dropdown.fiat.beneficiary': 'Beneficiary',
	'page.body.wallets.beneficiaries.dropdown.fiat.description': 'Description',
	'page.body.wallets.beneficiaries.dropdown.fiat.name': 'Name',
	'page.body.wallets.beneficiaries.dropdown.fiat.fullName': 'Full Name',

	'page.body.wallets.beneficiaries.addAddress': 'Adicionar endereço',
	'page.body.wallets.beneficiaries.addAddressModal.header': 'Adicionar endereço',

	'page.body.wallets.beneficiaries.addAddressModal.body.coinAddress': 'Endereço de rede',
	'page.body.wallets.beneficiaries.addAddressModal.body.coinBeneficiaryName': 'Nome da carteira',
	'page.body.wallets.beneficiaries.addAddressModal.body.coinDescription': 'Descrição (opcional)',

	'page.body.wallets.beneficiaries.addAddressModal.body.fiatName': 'Description',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatFullName': 'Full Name',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatAccountNumber': 'Account Number',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankName': 'Bank Name',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankSwiftCode': 'Bank Swift Code (optional)',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankName': 'Intermediary Bank Name (optional)',
	'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankSwiftCode':
		'Intermediary Bank Swift Code (optional)',

	'page.body.wallets.beneficiaries.addAddressModal.body.button': 'Confirmar',

	'page.body.wallets.beneficiaries.confirmationModal.header': 'Confirmar novo endereço',
	'page.body.wallets.beneficiaries.confirmationModal.body.text':
		'We have sent you an email containing a confirmation code pin, please enter it below to save the new address:',
	'page.body.wallets.beneficiaries.confirmationModal.body.confirmationModalCode': 'Pin code',
	'page.body.wallets.beneficiaries.confirmationModal.body.button': 'Confirmar',

	'page.body.wallets.beneficiaries.tipAddress': 'Endereço',
	'page.body.wallets.beneficiaries.tipName': 'Nome',
	'page.body.wallets.beneficiaries.tipDescription': 'Observação',

	'page.body.wallets.beneficiaries.failAddModal.header': 'Atenção',
	'page.body.wallets.beneficiaries.failAddModal.content': 'Você precisa concluir seu cadastro para adicionar um novo endereço.',
	'page.body.wallets.beneficiaries.failAddModal.button': 'Concluir cadastro',

	

	

	
};
