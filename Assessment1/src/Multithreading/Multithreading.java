package Multithreading;

import java.util.*;
import java.util.concurrent.Semaphore;

public class Multithreading {
	private Queue<Order> q;
	private final Semaphore addToQueue;
	private final Semaphore processQueue;

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Multithreading mt = new Multithreading();
		mt.generate();
	}

	public Multithreading() {
		q = new ArrayDeque<Order>(5);
		addToQueue = new Semaphore(1);
		processQueue = new Semaphore(0);

	}

	private void process() throws InterruptedException {
		processQueue.acquire();
		while (!q.isEmpty()) {
			System.out.println(q.poll().number);
		}
		addToQueue.release();
	}

	private void generate() throws InterruptedException {
		for (int i = 0; i <= 100; i++) {
			addToQueue.acquire();
			if (q.size() >= 5) {
				processQueue.release();
				process();
			} else {
				q.offer(new Order(i));
				addToQueue.release();
			}
		}
		if (!q.isEmpty()) {
			processQueue.release();
			process();
		}
	}

	static class Order {
		int number;

		public Order(int number) {
			this.number = number;
		}
	}
}
