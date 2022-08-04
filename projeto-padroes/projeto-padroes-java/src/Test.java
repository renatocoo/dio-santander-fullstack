import singleton.SingletonEager;
import singleton.SingletonLazy;
import singleton.SingletonLazyHolder;
import strategy.*;

public class Test {

        public static void main(String[] args){
            SingletonLazy lazy = SingletonLazy.getInstancia();
            System.out.println(lazy);
            lazy = SingletonLazy.getInstancia();
            System.out.println(lazy);


            SingletonEager eager = SingletonEager.getInstancia();
            System.out.println(eager);
            eager = SingletonEager.getInstancia();
            System.out.println(eager);

            SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
            System.out.println(lazyHolder);
            lazyHolder = SingletonLazyHolder.getInstancia();
            System.out.println(lazyHolder);

            // Strategy

            Comportamento normal = new ComportamentoNormal();
            Comportamento defensivo = new ComportamentoDefensivo();
            Comportamento agressivo = new ComportamentoAgressivo();

            Robo robo = new Robo();
            robo.setComportamento(defensivo);
            robo.mover();
            robo.setComportamento(normal);
            robo.mover();
            robo.mover();
            robo.setComportamento(agressivo);
            robo.mover();
            robo.mover();
            robo.mover();
        }
}
